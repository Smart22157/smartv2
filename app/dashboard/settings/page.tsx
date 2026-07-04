"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SettingsPage() {

  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    business_name: "",
    phone: "",
    email: "",
    website: "",
    location: "",
    logo: "",
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {

    const { data } = await supabase
      .from("settings")
      .select("*")
      .eq("id", 1)
      .single();

    if (data) {
      setSettings(data);
    }

  }

  async function saveSettings() {

    setLoading(true);

    const { error } = await supabase
      .from("settings")
      .update(settings)
      .eq("id", 1);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Settings saved successfully!");
  }

  return (

    <div className="max-w-5xl">

      <h1 className="text-5xl font-black">
        Settings
      </h1>

      <p className="mt-3 text-gray-400">
        Manage your SmartLens Media business information.
      </p>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 space-y-6">

        <input
          type="text"
          placeholder="Business Name"
          value={settings.business_name}
          onChange={(e) =>
            setSettings({
              ...settings,
              business_name: e.target.value,
            })
          }
          className="w-full rounded-xl bg-black border border-white/10 px-5 py-4"
        />

        <input
          type="email"
          placeholder="Business Email"
          value={settings.email}
          onChange={(e) =>
            setSettings({
              ...settings,
              email: e.target.value,
            })
          }
          className="w-full rounded-xl bg-black border border-white/10 px-5 py-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={settings.phone}
          onChange={(e) =>
            setSettings({
              ...settings,
              phone: e.target.value,
            })
          }
          className="w-full rounded-xl bg-black border border-white/10 px-5 py-4"
        />

        <input
          type="text"
          placeholder="Website"
          value={settings.website}
          onChange={(e) =>
            setSettings({
              ...settings,
              website: e.target.value,
            })
          }
          className="w-full rounded-xl bg-black border border-white/10 px-5 py-4"
        />

        <input
          type="text"
          placeholder="Business Location"
          value={settings.location}
          onChange={(e) =>
            setSettings({
              ...settings,
              location: e.target.value,
            })
          }
          className="w-full rounded-xl bg-black border border-white/10 px-5 py-4"
        />

        <input
          type="text"
          placeholder="Logo URL"
          value={settings.logo}
          onChange={(e) =>
            setSettings({
              ...settings,
              logo: e.target.value,
            })
          }
          className="w-full rounded-xl bg-black border border-white/10 px-5 py-4"
        />

        <button
          onClick={saveSettings}
          disabled={loading}
          className="rounded-full bg-red-600 px-8 py-4 font-semibold hover:bg-red-700 transition"
        >
          {loading ? "Saving..." : "Save Settings"}
        </button>

      </div>

      {/* Google Drive */}

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">

        <h2 className="text-2xl font-bold">
          Google Drive
        </h2>

        <p className="mt-3 text-gray-400">

          Status

        </p>

        <div className="mt-4 flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-green-500"></div>

          <span>
            Connected
          </span>

        </div>

      </div>

      {/* About */}

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">

        <h2 className="text-2xl font-bold">
          About SmartLens
        </h2>

        <p className="mt-4 text-gray-400">
          Version
        </p>

        <h3 className="mt-2 text-xl font-bold">
          SmartLens Media v2.0
        </h3>

        <p className="mt-6 text-gray-500">
          Built with ❤️ by Jeff
        </p>

      </div>

    </div>

  );

}