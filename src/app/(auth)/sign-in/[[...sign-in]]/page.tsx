import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-lg",
        },
      }}
    />
  );
}

export default SignInPage;
