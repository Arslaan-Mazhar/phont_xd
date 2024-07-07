
import SignUpForm from "./signup/page";
import Card from "../components/shared/Card";

export default function Home() {
  return (
    <main>
      <Card>
        <div className="flex justify-center items-center h-screen rounded-xl">
        <SignUpForm />
        </div>
      </Card>
    </main>
  );
}
