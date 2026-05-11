"use client";

import { useState } from "react";
import { Search, X, Shield, CheckCircle2, Calendar, Building2, Award, AlertCircle, Loader2 } from "lucide-react";

// Mock data sertifikat
const mockCertificates: Record<string, {
    number: string;
    name: string;
    standard: string;
    company: string;
    scope: string;
    issuedDate: string;
    expiryDate: string;
    status: "active" | "expired" | "suspended";
    auditor: string;
}> = {
    "QSI-2024-001": {
        number: "QSI-2024-001",
        name: "ISO 9001:2015",
        standard: "Quality Management System",
        company: "PT Maju Bersama Indonesia",
        scope: "Manufacture and Distribution of Industrial Equipment",
        issuedDate: "15 Januari 2024",
        expiryDate: "14 Januari 2027",
        status: "active",
        auditor: "Ir. Budi Santoso, M.T.",
    },
    "QSI-2023-045": {
        number: "QSI-2023-045",
        name: "ISO 14001:2015",
        standard: "Environmental Management System",
        company: "CV Hijau Lestari",
        scope: "Agricultural Processing and Distribution",
        issuedDate: "3 Maret 2023",
        expiryDate: "2 Maret 2024",
        status: "expired",
        auditor: "Dr. Siti Rahayu, S.T.",
    },
    "QSI-2024-089": {
        number: "QSI-2024-089",
        name: "ISO 45001:2018",
        standard: "Occupational Health & Safety",
        company: "PT Konstruksi Nusantara",
        scope: "Construction and Infrastructure Development",
        issuedDate: "20 Juli 2024",
        expiryDate: "19 Juli 2027",
        status: "active",
        auditor: "Ahmad Fauzi, S.T., M.M.",
    },
};

type Certificate = (typeof mockCertificates)[string];

export const CekSertifikat = () => {

    const [query, setQuery] = useState("");
    const [result, setResult] = useState<Certificate | null>(null);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleSearch = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setNotFound(false);
        setResult(null);

        // Simulate API delay
        await new Promise((r) => setTimeout(r, 900));

        const found = mockCertificates[query.trim().toUpperCase()];
        if (found) {
            setResult(found);
            setModalOpen(true);
        } else {
            setNotFound(true);
        }
        setLoading(false);
    };

    const statusConfig = {
        active: {
            label: "Aktif",
            icon: CheckCircle2,
            bg: "bg-emerald-50",
            border: "border-emerald-200",
            text: "text-emerald-700",
            dot: "bg-emerald-500",
        },
        expired: {
            label: "Kedaluwarsa",
            icon: AlertCircle,
            bg: "bg-red-50",
            border: "border-red-200",
            text: "text-red-700",
            dot: "bg-red-500",
        },
        suspended: {
            label: "Ditangguhkan",
            icon: AlertCircle,
            bg: "bg-amber-50",
            border: "border-amber-200",
            text: "text-amber-700",
            dot: "bg-amber-500",
        },
    };

    return (
        <div className="min-h-screen bg-lightColor">

            {/* HERO */}
            <section className="bg-mainColor pt-40 pb-24 px-5">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondaryColor/30 bg-secondaryColor/10 mb-6">
                        <Shield className="size-3.5 text-secondaryColor" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-secondaryColor">
                            Verifikasi Sertifikat
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Cek Keaslian<br />
                        <span className="text-secondaryColor">Sertifikat ISO</span>
                    </h1>

                    <p className="text-white/50 text-base leading-relaxed mb-10">
                        Masukkan nomor sertifikat untuk memverifikasi keaslian dan status sertifikasi yang diterbitkan oleh Qualified Sertifikasi Indonesia.
                    </p>

                    {/* Search Input */}
                    <div className="relative flex items-center gap-2 bg-white rounded-2xl p-2 shadow-xl shadow-black/20">
                        <div className="flex-1 flex items-center gap-3 px-3">
                            <Search className="size-4 text-mainColor/30 shrink-0" />
                            <input
                                suppressHydrationWarning
                                type="text"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setNotFound(false);
                                }}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                placeholder="Contoh: QSI-2024-001"
                                className="w-full py-2.5 text-sm text-mainColor placeholder:text-mainColor/30 outline-none font-mono tracking-wide"
                            />
                            {query && (
                                <button onClick={() => { setQuery(""); setNotFound(false); setResult(null); }}>
                                    <X className="size-4 text-mainColor/30 hover:text-mainColor transition-colors" />
                                </button>
                            )}
                        </div>
                        <button
                            onClick={handleSearch}
                            disabled={loading || !query.trim()}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-mainColor text-white text-sm font-semibold hover:bg-mainColor/90 disabled:opacity-40 transition-all"
                        >
                            {loading ? <Loader2 className="size-4 animate-spin" /> : <Search className="size-4" />}
                            {loading ? "Mencari..." : "Cari"}
                        </button>
                    </div>

                    {/* Not Found */}
                    {notFound && (
                        <div className="mt-4 flex items-center justify-center gap-2 text-red-400 text-sm">
                            <AlertCircle className="size-4" />
                            <span>Sertifikat tidak ditemukan. Periksa kembali nomor yang Anda masukkan.</span>
                        </div>
                    )}

                    {/* Example numbers */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                        <span className="text-xs text-white/30">Coba:</span>
                        {Object.keys(mockCertificates).map((key) => (
                            <button
                                key={key}
                                onClick={() => { setQuery(key); setNotFound(false); }}
                                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* INFO SECTION */}
            <section className="padding py-16 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        { icon: Shield, title: "Terverifikasi Resmi", desc: "Semua sertifikat diterbitkan sesuai standar internasional yang diakui global." },
                        { icon: CheckCircle2, title: "Status Real-time", desc: "Informasi status sertifikat diperbarui secara langsung dari database kami." },
                        { icon: Award, title: "Akreditasi KAN", desc: "Qualified Sertifikasi Indonesia diakreditasi oleh Komite Akreditasi Nasional (KAN)." },
                    ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="bg-white rounded-2xl border border-border p-6 shadow-sm flex flex-col gap-3">
                                <div className="size-10 flex items-center justify-center rounded-xl bg-otherColor text-secondaryColor">
                                    <Icon className="size-5" />
                                </div>
                                <p className="font-semibold text-mainColor">{item.title}</p>
                                <p className="text-sm text-mainColor/50 leading-relaxed">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* MODAL */}
            {modalOpen && result && (() => {
                const cfg = statusConfig[result.status];
                const StatusIcon = cfg.icon;
                return (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setModalOpen(false)}
                        />

                        {/* Modal */}
                        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">

                            {/* Header */}
                            <div className="bg-mainColor px-6 pt-8 pb-6 relative overflow-hidden">
                                {/* decorative */}
                                <div className="absolute -top-6 -right-6 size-32 rounded-full bg-secondaryColor/10" />
                                <div className="absolute top-4 right-16 size-16 rounded-full bg-white/5" />

                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                                >
                                    <X className="size-4" />
                                </button>

                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="size-12 flex items-center justify-center rounded-2xl bg-secondaryColor/20 border border-secondaryColor/30 text-secondaryColor shrink-0">
                                        <Award className="size-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/50 text-xs font-mono mb-1">{result.number}</p>
                                        <h2 className="text-xl font-bold text-white leading-tight">{result.name}</h2>
                                        <p className="text-white/60 text-sm">{result.standard}</p>
                                    </div>
                                </div>

                                {/* Status badge */}
                                <div className={`mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${cfg.bg} ${cfg.border} relative z-10`}>
                                    <div className={`size-1.5 rounded-full ${cfg.dot} ${result.status === "active" ? "animate-pulse" : ""}`} />
                                    <span className={`text-xs font-semibold ${cfg.text}`}>{cfg.label}</span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { icon: Building2, label: "Perusahaan", value: result.company },
                                        { icon: Shield, label: "Ruang Lingkup", value: result.scope },
                                        { icon: Calendar, label: "Tanggal Terbit", value: result.issuedDate },
                                        { icon: Calendar, label: "Berlaku Hingga", value: result.expiryDate },
                                        { icon: Award, label: "Auditor", value: result.auditor },
                                    ].map((row, i) => {
                                        const RowIcon = row.icon;
                                        return (
                                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-lightColor border border-border">
                                                <div className="size-7 flex items-center justify-center rounded-lg bg-otherColor text-secondaryColor shrink-0 mt-0.5">
                                                    <RowIcon className="size-3.5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-mainColor/40 mb-0.5">{row.label}</p>
                                                    <p className="text-sm font-medium text-mainColor">{row.value}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <p className="text-xs text-mainColor/30 text-center pt-2">
                                    Data diverifikasi dari sistem Qualified Sertifikasi Indonesia · {new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </div>
    );
}