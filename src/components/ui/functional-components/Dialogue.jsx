"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { Button } from "../button";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Dialogue = () => {
  const [service, setService] = useState({ id: null, title: "" });
  const [serviceData, setServiceData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    emailjs.init("LX9svQrEVuINGePQm");
    const fetchData = async () => {
      const res = await fetch("https://alter-power.co.za/api/services/");
      const data = await res.json();
      setServiceData(data);
    };
    fetchData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!service.id) {
      Swal.fire({
        title: "Please Select a service",
        icon: "warning",
      });
      return;
    }

    const formElement = e.target;

    


    // Debug - log form data
    const formData = new FormData(formElement);
    const payload = {
      customer_first_name: formData.get("first_name"),
      customer_last_name: formData.get("last_name"),
      customer_email: formData.get("from_email"),
      customer_phone: formData.get("phone"),
      selected_service: service.id,
    };

    

    try {
      // Send data to your API endpoint
      const response = await fetch(
        "https://alter-power.co.za/api/message/quote-request/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        toast.error("Failed to post");
      }

      // If API call is successful, then send email
      await emailjs.sendForm(
        'service_a5654uh',
        'template_r00e2p3',
        formElement
      );

      toast.success("Successfull");
      formElement.reset();
      setService({ id: null, title: "" });
      setOpen(false);
      setService("");
    } catch (error) {
      toast.error("Failed to upload");
    }
  };

  return (
    <div className="mt-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-transparent border-[0.5px] border-white text-white hover:bg-[#e04a10] rounded-md">
            Get A Free Quote
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[775px] max-h-[80vh] overflow-y-auto bg-sky-900">
          <DialogHeader>
            <DialogTitle>
              <h1 className="text-center text-2xl font-bold">
                Get Free Quote Now:
              </h1>
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleFormSubmit}>
            <div className="w-full flex flex-col space-y-4">
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                  className="px-4 py-2 rounded-lg outline-none w-full mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                  name="first_name"
                  id="first_name"
                  type="text"
                  placeholder="Your First Name"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <input
                  className="px-4 py-2 rounded-lg outline-none w-full mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                  name="last_name"
                  id="last_name"
                  type="text"
                  placeholder="Your Last Name"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium text-white"
                >
                  Email *
                </label>
                <input
                  className="px-4 py-2 rounded-lg outline-none w-full mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                  name="from_email"
                  id="from_email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Phone *
                </label>
                <input
                  className="px-4 py-2 rounded-lg outline-none w-full mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div className="mt-4">
                <h1 className="mb-2 font-semibold text-white">
                  What service would you like?
                </h1>
                <RadioGroup
                  value={service.title}
                  onValueChange={(title) => {
                    const selectedService = serviceData.find(
                      (s) => s.title === title
                    );
                    setService({
                      id: selectedService.id,
                      title: selectedService.title,
                    });
                  }}
                >
                  {serviceData?.map((data) => (
                    <div
                      key={data?.id}
                      className="flex items-center gap-3 text-white"
                    >
                      <RadioGroupItem
                        value={data?.title}
                        id={data?.id}
                        name="service"
                      />
                      <Label htmlFor="r1">{data?.title}</Label>
                    </div>
                  ))}
                </RadioGroup>
                {/* Hidden input to send service value in form */}
                <input type="hidden" name="selected_service" value={service.id} />
              </div>

              <div className="relative">
                <input
                  className="btn btn-primary text-white w-full mt-6"
                  type="submit"
                  value="Get 100% Free Quote Now"
                />
                <FaLongArrowAltRight className="absolute top-[41px] right-24 text-white" />
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dialogue;
