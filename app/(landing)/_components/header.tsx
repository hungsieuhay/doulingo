import { ThemeToggle } from "@/components/theme/them-toggle";
import { Button } from "@/components/ui/button";
import GithubSVG from "@/public/images/github.svg";
import LogoSVG from "@/public/images/logo.svg";
import {
  ClerkLoaded,
  UserButton,
  SignedIn,
  SignInButton,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative flex justify-center">
      <div className="z-1 flex w-full items-center gap-2 px-2 sm:px-8">
        <div className="flex flex-1 items-center justify-start gap-1 max-sm:hidden">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/elitenoire/trylingo"
              target="_blank"
              aria-label="GitHub repo"
              title="Github repo"
            >
              <GithubSVG className="size-6" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
        <Link
          href="/"
          className="focus-visible group flex h-16 w-14 flex-col items-center gap-1 rounded-b-3xl bg-secondary/30 px-[6px] pt-2 text-2xl transition-colors hover:bg-primary/25 dark:bg-card dark:hover:bg-border/70 sm:size-32 sm:rounded-b-4xl sm:pt-4 sm:text-3xl lg:w-36 lg:text-4xl"
          title="Lingo app"
        >
          <LogoSVG className="w-[1.5em] group-hover:animate-bounce" />
          <span className="font-display -tracking-widest max-sm:sr-only">
            Lingo
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost">Login</Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <ThemeToggle className="size-12 border border-solid border-border bg-card/40 backdrop-blur-lg"></ThemeToggle>
      </div>
    </header>
  );
};
