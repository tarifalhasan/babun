import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const JoinTheWaitlist = () => {
  return (
    <div
      style={{
        background: "linear-gradient(270deg, #DCEFF0 30%, #FFF2AC 100%)",
      }}
      className=" py-10 xl:py-20"
    >
      <div className="container flex flex-col lg:flex-row gap-6 lg:items-center">
        <div className="basis-full space-y-2 lg:basis-[40%]">
          <div>
            <h4 className="max-w-[356.094px] font-bold text-4xl xl:text-6xl leading-tight">
              JOIN THE WAITLIST
            </h4>
          </div>
          <p className="text-sm sm:text-base xl:text-xl font-bold">
            Don&apos;t miss out! Join our waitlist now for exclusive early
            access and be the first to experience the future of business
            management.
          </p>
        </div>
        <div className="basis-full space-y-5 lg:basis-[60%]">
          <div className="grid sm:grid-cols-2 gap-3">
            <div className=" border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
              <label
                htmlFor="firstName"
                className=" relative inline-flex gap-2 items-center text-base font-medium"
              >
                <span className=" w-2 h-2 rounded-full bg-black"></span> FIRST
                NAME
              </label>
              <input
                type="text"
                className="lg:text-base text-foreground placeholder:text-foreground w-full bg-transparent  outline-none border-0 focus:outline-none text-sm font-normal"
              />
            </div>
            <div className=" border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
              <label
                htmlFor="firstName"
                className=" relative inline-flex gap-2 items-center text-base font-medium"
              >
                <span className=" w-2 h-2 rounded-full bg-black"></span> Last
                NAME
              </label>
              <input
                type="text"
                className="lg:text-base text-foreground placeholder:text-foreground w-full bg-transparent  outline-none border-0 focus:outline-none text-sm font-normal"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className=" border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
              <label
                htmlFor="firstName"
                className=" relative inline-flex gap-2 items-center text-base font-medium"
              >
                <span className=" w-2 h-2 rounded-full bg-black"></span>EMAIL
                ADDRESS
              </label>
              <input
                type="text"
                className="lg:text-base text-foreground placeholder:text-foreground w-full bg-transparent  outline-none border-0 focus:outline-none text-sm font-normal"
              />
            </div>
            <div className=" border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
              <label
                htmlFor="firstName"
                className=" relative inline-flex gap-2 items-center text-base font-medium"
              >
                <span className=" w-2 h-2 rounded-full bg-black"></span> COMPANY
              </label>
              <input
                type="text"
                className="lg:text-base text-foreground placeholder:text-foreground w-full bg-transparent  outline-none border-0 focus:outline-none text-sm font-normal"
              />
            </div>
          </div>
          <div className="flex  items-center justify-center">
            <div className=" border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
              <label
                htmlFor="firstName"
                className=" relative inline-flex gap-2 items-center text-base font-medium"
              >
                <span className=" w-2 h-2 rounded-full bg-black"></span> COMPANY
              </label>
              <input
                type="text"
                className="lg:text-base text-foreground placeholder:text-foreground w-full bg-transparent  outline-none border-0 focus:outline-none text-sm font-normal"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className=" inline-flex items-center gap-2">
              <Checkbox id="privacy" />
              <label htmlFor="privacy">
                By clicking this box you agree to our Privacy Policy
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button className="rounded-full">Join the waitlist</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheWaitlist;
