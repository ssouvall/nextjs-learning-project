import CardWrapper, { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/skeletons";
import { Metadata } from "next";
import { authConfig } from "@/auth.config";
import { auth } from "@/auth";
import LoggedInUser from "@/app/ui/dashboard/logged-in-user";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const session = await auth();
  console.log(session);
  return (
    <main>
      <LoggedInUser name={session?.user?.name || ""} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue} /> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
