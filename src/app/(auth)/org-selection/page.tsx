import { OrganizationList } from "@clerk/nextjs";

function OrgSelectionPage() {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl="/"
      afterSelectOrganizationUrl="/"
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-lg",
        },
      }}
    />
  );
}

export default OrgSelectionPage;
