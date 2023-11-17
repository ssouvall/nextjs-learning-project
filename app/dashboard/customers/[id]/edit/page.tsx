import Form from "@/app/ui/customers/edit-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchCustomerById } from "@/app/lib/data";
import { Customer } from "@/app/lib/definitions";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Customer",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await fetchCustomerById(id);

  if (!customer) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Edit Customer",
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customer as Customer} />
    </main>
  );
}
