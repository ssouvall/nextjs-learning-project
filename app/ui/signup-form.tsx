"use client";

import { lusitana } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  ArrowLeftIcon,
  HomeIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { useFormState, useFormStatus } from "react-dom";
import { createUser } from "@/app/lib/actions";
import Link from "next/link";

export default function SignUpForm() {
  const initialState = { message: null, errors: {}, isSuccess: false };
  const [state, dispatch] = useFormState(createUser, initialState);
  const { pending } = useFormStatus();

  if (state.isSuccess) {
    return (
      <div className="flex-1 flow-root rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className}mb-3 text-2xl pb-20`}>
          User Created Successfully!
        </h1>
        <Link
          href="/"
          className="flex h-10 float-left items-center mr-2 gap-5 self-start rounded-lg bg-green-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
        >
          <span>Home</span>
          <HomeIcon className="w-5 md:w-6" />
        </Link>{" "}
        <Link
          href="/login"
          className="flex h-10 items-center float-left gap-5 self-start rounded-lg bg-blue-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Log In</span>
          <ArrowRightOnRectangleIcon className="w-5 md:w-6" />
        </Link>
      </div>
    );
  } else {
    return (
      <form action={dispatch} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Tell us about yourself.
          </h1>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your first and last name"
                // required
              />
            </div>
          </div>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  // required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Choose a Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  // required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="confirm_password"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="confirm_password"
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm password"
                  // required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <SignUpButton />
          <div className="flex h-8 items-end space-x-1">
            {/* {code === "CredentialSignin" && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p aria-live="polite" className="text-sm text-red-500">
                  Invalid credentials
                </p>
              </>
            )} */}
          </div>
        </div>
      </form>
    );
  }
}

function SignUpButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-6 w-full" aria-disabled={pending}>
      Sign Up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
