"use client";

import { Customer } from "@/app/lib/definitions";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import { updateCustomer } from "@/app/lib/actions";

export default function EditCustomerForm({ customer }: { customer: Customer }) {
  const updateCustomerWithId = updateCustomer.bind(null, customer.id);

  return (
    <form action={updateCustomerWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
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
              defaultValue={customer.name}
              placeholder="Enter your first and last name"
              // required
            />
          </div>
          {/* {state.errors?.name ? (
            <div
              id="name-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.name.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null} */}

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
              defaultValue={customer.email}
              placeholder="Enter your email address"
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          {/* {state.errors?.email ? (
            <div
              id="email-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.email.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null} */}
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/customers"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Edit Customer</Button>
        </div>
      </div>
    </form>
  );
}
