import { HeadphonesIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { SidebarTrigger } from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";

interface PageHeaderProps {
  title: string;
  className?: string;
}

export function PageHeader({ title, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b p-4",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <Button asChild size="sm" variant="outline">
          <Link href="mailto:contact@resonance.ai">
            <ThumbsUpIcon />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>

        <Button asChild size="sm" variant="outline">
          <Link href="mailto:support@resonance.ai">
            <HeadphonesIcon />
            <span className="hidden lg:block">Need help?</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
