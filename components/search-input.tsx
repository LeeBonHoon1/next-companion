"use client";
import * as LucideIcons from "lucide-react";
import qs from "query-string";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId: categoryId,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router, categoryId]);
  console.log(value);
  return (
    <div className="relative">
      <LucideIcons.Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
        placeholder="Search..."
        className="pl-10 bg-primary/10"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
