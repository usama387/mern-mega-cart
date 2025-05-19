import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setUser } from "@/redux/authSlice";
import { setShowUserLogin } from "@/redux/showLoginSlice";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { showUserLogin } = useSelector((store) => store?.loginSlice);

  // to update the state in reducer
  const dispatch = useDispatch();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    dispatch(
      setUser({
        email: "test@megamart.dev",
        name: "Usama Razaaq",
      })
    );
    dispatch(setShowUserLogin(false));
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-base">
      <Dialog open={showUserLogin} onOpenChange={setShowUserLogin}>
        <DialogContent className="sm:max-w-[400px]">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold text-red-600">
                <span className="text-black dark:text-white mr-2">User</span>
                {state === "login" ? "Login" : "Sign Up"}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={formSubmitHandler}
              >
                {state === "register" && (
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Type your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Type your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Type your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                  />
                </div>

                <div className="text-sm text-muted-foreground my-2">
                  {state === "register" ? (
                    <span>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setState("login")}
                        className="text-red-600 underline"
                      >
                        Click here
                      </button>
                    </span>
                  ) : (
                    <span>
                      Create an account?{" "}
                      <button
                        type="button"
                        onClick={() => setState("register")}
                        className="text-red-600 underline"
                      >
                        Click here
                      </button>
                    </span>
                  )}
                </div>

                <Button type="submit" variant="destructive" className="w-full">
                  {state === "register" ? "Create Account" : "Login"}
                </Button>
              </form>
            </CardContent>
          </Card>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                onClick={() => dispatch(setShowUserLogin(false))}
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
