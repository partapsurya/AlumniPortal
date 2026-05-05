"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  
  const [formData, setFormData] = useState({
    workDomain: "",
    location: "",
    bio: "",
    profileImage: "",
    interests: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      fetchProfile();
    }
  }, [status]);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/profile");
      if (res.ok) {
        const data = await res.json();
        setFormData({
          workDomain: data.workDomain || "",
          location: data.location || "",
          bio: data.bio || "",
          profileImage: data.profileImage || "",
          interests: data.interests?.join(", ") || "",
        });
      }
    } catch (err) {
      console.error("Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });

    const updatedData = {
      ...formData,
      interests: formData.interests.split(",").map(i => i.trim()).filter(i => i !== ""),
    };

    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Profile updated successfully!" });
      } else {
        setMessage({ type: "error", text: "Failed to update profile." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "An error occurred." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-pulse text-slate-400 font-serif text-2xl">Loading Profile...</div>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeUp">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-slate-900 px-8 py-12 text-white flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden bg-slate-800 flex items-center justify-center shrink-0">
                {formData.profileImage ? (
                  <img src={formData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-4xl text-white/40">person</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-serif font-bold">Edit Your Profile</h1>
                <p className="text-slate-400 mt-2">Complete your profile to connect with other alumni.</p>
              </div>
            </div>

            <form className="p-8 md:p-12 space-y-8" onSubmit={handleSubmit}>
              {message.text && (
                <div className={`p-4 rounded-lg flex items-center gap-2 text-sm font-bold ${
                  message.type === "success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
                }`}>
                  <span className="material-symbols-outlined">{message.type === "success" ? "check_circle" : "error"}</span>
                  {message.text}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Profile Image URL</label>
                  <input 
                    type="text" 
                    value={formData.profileImage}
                    onChange={(e) => setFormData({...formData, profileImage: e.target.value})}
                    className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all" 
                    placeholder="https://example.com/your-photo.jpg"
                  />
                  <p className="text-[10px] text-slate-400 mt-2">Enter a direct link to a photo (JPG, PNG).</p>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Work Domain</label>
                  <select 
                    value={formData.workDomain}
                    onChange={(e) => setFormData({...formData, workDomain: e.target.value})}
                    className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all"
                  >
                    <option value="">Select Domain</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Legal">Legal</option>
                    <option value="Arts & Media">Arts & Media</option>
                    <option value="Entrepreneurship">Entrepreneurship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Current Location</label>
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all" 
                    placeholder="e.g. San Francisco, CA"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Interests (Comma separated)</label>
                <input 
                  type="text" 
                  value={formData.interests}
                  onChange={(e) => setFormData({...formData, interests: e.target.value})}
                  className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all" 
                  placeholder="e.g. AI, Venture Capital, Hiking, Photography"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Short Bio</label>
                <textarea 
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition-all h-32 resize-none" 
                  placeholder="Tell us about your journey..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={saving}
                  className="bg-slate-900 text-white px-10 py-4 rounded-lg font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-slate-800 transition-all disabled:opacity-50"
                >
                  {saving ? "Saving Changes..." : "Save Profile"}
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
