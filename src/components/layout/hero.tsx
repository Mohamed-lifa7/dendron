"use client";

import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Icons } from "@/components/icons";

export const Hero = () => {
  return (
    <div className="relative">
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl sm:text-center md:max-w-2xl">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
            Welcome to Dendron
            <br className="hidden md:block" />
            Your Note-Taking Solution{" "}
            <span className="relative inline-block">
              Capture and Organize Knowledge
              <div className="-mt-3 h-3 w-full bg-purple-400" />
            </span>
          </h2>
          <p className="mb-6 text-base tracking-wide text-muted-foreground md:text-lg">
            Dendron is your all-in-one knowledge management platform. Store,
            retrieve, and share your notes effortlessly.
          </p>
          <AuthLoading>
            <Button variant="ghost" size="icon" disabled>
              <Spinner size="lg" />
            </Button>
          </AuthLoading>
          <Authenticated>
            <Button asChild className="my-4">
              <Link href="/documents">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Authenticated>
          <Unauthenticated>
            <SignInButton mode="modal">
              <Button className="my-4">
                Sign In to Dendron
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignInButton>
          </Unauthenticated>
          <Button className="ml-4" asChild variant="outline">
            <Link href="https://github.com/Mohamed-lifa7/dendron">
              Github
              <Icons.gitHub className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
