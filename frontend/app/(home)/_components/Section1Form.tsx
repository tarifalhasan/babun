import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Section1Form = () => {
  return (
    <form className=" pt-2">
      <div className=" flex items-center shrink-0  gap-3 flex-wrap justify-between">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className=" border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
            <label
              htmlFor="firstName"
              className=" relative inline-flex gap-2 items-center text-[10px] font-medium"
            >
              <span className=" w-1 h-1 rounded-full bg-black"></span> FIRST
              NAME
            </label>
            <input
              type="text"
              className=" placeholder:text-foreground bg-transparent w-full  outline-none border-0 focus:outline-none text-sm font-normal"
            />
          </div>
          <div className=" border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
            <label
              htmlFor="firstName"
              className=" relative inline-flex gap-2 items-center text-[10px] font-medium"
            >
              <span className=" w-1 h-1 rounded-full bg-black"></span> Last NAME
            </label>
            <input
              type="text"
              className=" placeholder:text-foreground bg-transparent w-full  outline-none border-0 focus:outline-none text-sm font-normal"
            />
          </div>
        </div>
        <div className=" grid gap-3 grid-cols-12">
          <div className="col-span-full sm:col-span-7 border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
            <label
              htmlFor="firstName"
              className=" relative inline-flex gap-2 items-center text-[10px] font-medium"
            >
              <span className=" w-1 h-1 rounded-full bg-black"></span> EMAIL
              ADDRESS
            </label>
            <input
              type="text"
              className=" placeholder:text-foreground bg-transparent w-full  outline-none border-0 focus:outline-none text-sm font-normal"
            />
          </div>
          <div className=" col-span-12 sm:col-span-5 border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
            <label
              htmlFor="firstName"
              className=" relative inline-flex gap-2 items-center text-[10px] font-medium"
            >
              <span className=" w-1 h-1 rounded-full bg-black"></span> COMPANY
            </label>
            <input
              type="text"
              className=" placeholder:text-foreground bg-transparent w-full  outline-none border-0 focus:outline-none text-sm font-normal"
            />
          </div>
        </div>
        <div className=" border relative overflow-hidden  px-4 p border-black rounded-[10px] h-14">
          <label
            htmlFor="firstName"
            className=" relative inline-flex gap-2 items-center text-[10px] font-medium"
          >
            <span className=" w-1 h-1 rounded-full bg-black"></span> COUNTRY
          </label>
          <input
            type="text"
            className=" placeholder:text-foreground bg-transparent w-full  outline-none border-0 focus:outline-none text-sm font-normal"
          />
        </div>
      </div>

      <div className="flex  gap-1 py-4 items-start ">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm flex-1  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          By clicking this box you agree to our Privacy Policy
        </label>
      </div>
      <div>
        <Button className=" rounded-full">Join the waitlist</Button>
      </div>
    </form>
  );
};

export default Section1Form;
