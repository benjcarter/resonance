"use client";

import { useUser } from "@clerk/nextjs";
import { HeadphonesIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

export function DashboardHeader() {
  const { user, isLoaded } = useUser();

  return (
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">Nice to see you</p>
        <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
          {isLoaded ? (user?.fullName ?? user?.firstName ?? "there") : "..."}
        </h1>
      </div>

      <div className="lg:flex items-center gap-3 hidden">
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
