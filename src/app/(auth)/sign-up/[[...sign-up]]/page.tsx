import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  return (
    <SignUp
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-lg",
        },
      }}
    />
  );
}

export default SignUpPage;
