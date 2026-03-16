import { useState, FormEvent } from "react";

const budgetOptions = ["₹1,000 – ₹5,000", "₹5,000 – ₹10,000", "₹10,000 – ₹25,000", "₹50,000 – ₹1,00,000", "₹5,00,000+"];

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    businessName: "",
    email: "",
    website: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          mobileNumber: formData.mobile,
          businessName: formData.businessName,
          businessEmail: formData.email,
          website: formData.website,
          budget: formData.budget,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "py-3 px-4 border-b border-foreground/10 dark:border-[#333] bg-transparent text-foreground outline-none focus:border-primary transition-all w-full";

  if (submitted) {
    return (
      <section id="lead-capture" className="py-[8vh] px-[5vw] bg-section">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-primary text-[2.5rem] font-bold font-display mb-4">Thank You!</h2>
          <p className="text-muted-foreground text-lg">We'll get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-capture" className="py-[8vh] px-[5vw] bg-section">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-[2.5rem] font-bold font-display mb-4">
            Ready to Stop Missing Out on Sales?
          </h2>
          <p className="text-muted-foreground">
            Let's uncover what's holding your marketing back and fix it—so you start seeing real revenue, fast.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card p-9 border-2 border-foreground dark:border-[#333] shadow-[8px_8px_0_rgba(0,0,0,0.12)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.6)] flex flex-col gap-5 transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[12px_12px_0_rgba(0,0,0,0.15)] dark:hover:shadow-[12px_12px_0_rgba(0,0,0,0.8)]"
        >
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Name *</label>
            <input
              type="text"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Mobile Number *</label>
            <input
              type="tel"
              required
              maxLength={15}
              value={formData.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Business Name *</label>
            <input
              type="text"
              required
              maxLength={100}
              value={formData.businessName}
              onChange={(e) => handleChange("businessName", e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Business Email (optional)</label>
            <input
              type="email"
              maxLength={255}
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Website (optional)</label>
            <input
              type="url"
              maxLength={255}
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Monthly marketing budget (INR)</label>
            <select
              value={formData.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
              className={inputClass}
            >
              <option value="">Select a range</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="self-start py-2.5 px-[18px] bg-primary text-primary-foreground font-semibold text-[15px] transition-all hover:brightness-110 border-none cursor-pointer disabled:opacity-50"
          >
            {loading ? "Sending..." : "Request a Callback →"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
