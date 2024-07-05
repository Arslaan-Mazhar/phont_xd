import Image from "next/image";
import SignUpForm from "./(auth)/sign-up/page";
import Card from "../components/shared/Card";
import LoginForm from "./(auth)/sign-in/page";

export default function Home() {
  return (
    <main>
      <Card>
        <SignUpForm />
        {/* <LoginForm /> */}
      </Card>
    </main>
  );
}
