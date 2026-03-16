import { useState, FormEvent } from "react";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookCallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timeOptions = ["Morning", "Afternoon", "Evening"];
const categoryOptions = ["SEO", "Content Marketing", "Photography / Videography", "Paid Ads"];

const BookCallModal = ({ open, onOpenChange }: BookCallModalProps) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !date || !time || !category) return;

    const message = `Hi, my name is ${name}.

I am interested in your ${category} service.

Preferred call date: ${format(date, "PPP")}
Preferred time: ${time}

Can you confirm availability?`;

    const whatsappURL = `https://wa.me/917013695672?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    onOpenChange(false);
    setName("");
    setDate(undefined);
    setTime("");
    setCategory("");
  };
  const inputClass =
    "py-3 px-4 border-b border-foreground/10 dark:border-[#333] bg-transparent text-foreground outline-none focus:border-primary transition-all w-full";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] border-2 border-foreground dark:border-[#333] shadow-[8px_8px_0_rgba(0,0,0,0.12)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.6)] rounded-none p-0 gap-0">
        <div className="p-9">
          <DialogHeader>
            <DialogTitle className="text-primary font-display text-[1.9rem] font-bold pb-2.5 border-b border-foreground/10 dark:border-[#333]">
              Book a Call
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Preferred Call Date *</label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      inputClass,
                      "flex items-center justify-between text-left",
                      !date && "text-muted-foreground",
                    )}
                  >
                    {date ? format(date, "PPP") : "Pick a date"}
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Preferred Time *</label>
              <select required value={time} onChange={(e) => setTime(e.target.value)} className={inputClass}>
                <option value="">Select time</option>
                {timeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Query Category *</label>
              <select required value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
                <option value="">Select category</option>
                {categoryOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="self-start py-2.5 px-[18px] bg-primary text-primary-foreground font-semibold text-[15px] transition-all hover:brightness-110 border-none cursor-pointer mt-2"
            >
              Connect on WhatsApp
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookCallModal;
