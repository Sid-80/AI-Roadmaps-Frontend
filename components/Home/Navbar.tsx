import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex p-4 items-center justify-between">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex gap-4">
        <Button>
            <Link href={'/login'}>
                Login
            </Link>
        </Button>
        <Button>
            <Link href={'/signin'}>
                SignIn
            </Link>
        </Button>
      </div>
    </div>
  );
}
