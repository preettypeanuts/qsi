"use client";

import { useState } from "react";
import {
    Search,
    X,
    Shield,
    CheckCircle2,
    Calendar,
    Building2,
    Award,
    AlertCircle,
    Loader2,
} from "lucide-react";

// Mock data sertifikat
const mockCertificates: Record<
    string,
    {
        number: string;
        name: string;
        standard: string;
        company: string;
        scope: string;
        issuedDate: string;
        expiryDate: string;
        status: "active" | "expired" | "suspended";
        auditor: string;
    }
> = {
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
            <section className="bg-mainColor px-5 pb-24 pt-40">
                <div className="mx-auto max-w-2xl text-center">

                    {/* Badge */}
                    <div className="animate-fade-up-in inline-flex items-center gap-2 rounded-full border border-secondaryColor/30 bg-secondaryColor/10 px-4 py-1.5 mb-6">
                        <Shield className="size-3.5 text-secondaryColor" />

                        <span className="text-xs font-semibold uppercase tracking-widest text-secondaryColor">
                            Verifikasi Sertifikat
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="animate-fade-up-in-200 mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                        Cek Keaslian
                        <br />

                        <span className="text-secondaryColor">
                            Sertifikat ISO
                        </span>
                    </h1>

                    {/* Desc */}
                    <p className="animate-fade-up-in-400 mb-10 text-base leading-relaxed text-white/50">
                        Masukkan nomor sertifikat untuk memverifikasi
                        keaslian dan status sertifikasi yang diterbitkan
                        oleh Qualified Sertifikasi Indonesia.
                    </p>

                    {/* Search */}
                    <div className="animate-fade-up-in-400 relative flex items-center gap-2 rounded-2xl bg-white p-2 shadow-xl shadow-black/20">

                        <div className="flex flex-1 items-center gap-3 px-3">
                            <Search className="size-4 shrink-0 text-mainColor/30" />

                            <input
                                suppressHydrationWarning
                                type="text"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setNotFound(false);
                                }}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && handleSearch()
                                }
                                placeholder="Contoh: QSI-2024-001"
                                className="w-full py-2.5 font-mono text-sm tracking-wide text-mainColor outline-none placeholder:text-mainColor/30"
                            />

                            {query && (
                                <button
                                    onClick={() => {
                                        setQuery("");
                                        setNotFound(false);
                                        setResult(null);
                                    }}
                                >
                                    <X className="size-4 text-mainColor/30 transition-colors hover:text-mainColor" />
                                </button>
                            )}
                        </div>

                        <button
                            onClick={handleSearch}
                            disabled={loading || !query.trim()}
                            className="flex items-center gap-2 rounded-xl bg-mainColor px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-mainColor/90 disabled:opacity-40"
                        >
                            {loading ? (
                                <Loader2 className="size-4 animate-spin" />
                            ) : (
                                <Search className="size-4" />
                            )}

                            {loading ? "Mencari..." : "Cari"}
                        </button>
                    </div>

                    {/* Not Found */}
                    {notFound && (
                        <div className="animate-fade-up-in mt-4 flex items-center justify-center gap-2 text-sm text-red-400">
                            <AlertCircle className="size-4" />

                            <span>
                                Sertifikat tidak ditemukan. Periksa kembali
                                nomor yang Anda masukkan.
                            </span>
                        </div>
                    )}

                    {/* Example */}
                    <div className="animate-fade-up-in-400 mt-6 flex flex-wrap items-center justify-center gap-2">
                        <span className="text-xs text-white/30">
                            Coba:
                        </span>

                        {Object.keys(mockCertificates).map((key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setQuery(key);
                                    setNotFound(false);
                                }}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-white/50 transition-all hover:border-white/30 hover:text-white"
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* INFO */}
            <section className="padding mx-auto max-w-4xl py-16">
                <div className="grid gap-4 md:grid-cols-3">

                    {[
                        {
                            icon: Shield,
                            title: "Terverifikasi Resmi",
                            desc: "Semua sertifikat diterbitkan sesuai standar internasional yang diakui global.",
                        },
                        {
                            icon: CheckCircle2,
                            title: "Status Real-time",
                            desc: "Informasi status sertifikat diperbarui secara langsung dari database kami.",
                        },
                        {
                            icon: Award,
                            title: "Akreditasi KAN",
                            desc: "Qualified Sertifikasi Indonesia diakreditasi oleh Komite Akreditasi Nasional (KAN).",
                        },
                    ].map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={i}
                                className={`animate-fade-up-in-${i * 200} flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 shadow-sm`}
                            >
                                <div className="flex size-10 items-center justify-center rounded-xl bg-otherColor text-secondaryColor">
                                    <Icon className="size-5" />
                                </div>

                                <p className="font-semibold text-mainColor">
                                    {item.title}
                                </p>

                                <p className="text-sm leading-relaxed text-mainColor/50">
                                    {item.desc}
                                </p>
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
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-up-in"
                            onClick={() => setModalOpen(false)}
                        />

                        {/* Modal */}
                        <div className="animate-fade-up-in relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">

                            {/* Header */}
                            <div className="relative overflow-hidden bg-mainColor px-6 pb-6 pt-8">

                                <div className="absolute -right-6 -top-6 size-32 rounded-full bg-secondaryColor/10" />
                                <div className="absolute right-16 top-4 size-16 rounded-full bg-white/5" />

                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                                >
                                    <X className="size-4" />
                                </button>

                                <div className="relative z-10 flex items-start gap-4">

                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-secondaryColor/30 bg-secondaryColor/20 text-secondaryColor">
                                        <Award className="size-6" />
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs font-mono text-white/50">
                                            {result.number}
                                        </p>

                                        <h2 className="text-xl font-bold leading-tight text-white">
                                            {result.name}
                                        </h2>

                                        <p className="text-sm text-white/60">
                                            {result.standard}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className={`relative z-10 mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${cfg.bg} ${cfg.border}`}
                                >
                                    <div
                                        className={`size-1.5 rounded-full ${cfg.dot} ${
                                            result.status === "active"
                                                ? "animate-pulse"
                                                : ""
                                        }`}
                                    />

                                    <span
                                        className={`text-xs font-semibold ${cfg.text}`}
                                    >
                                        {cfg.label}
                                    </span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="space-y-4 p-6">

                                <div className="grid grid-cols-1 gap-3">

                                    {[
                                        {
                                            icon: Building2,
                                            label: "Perusahaan",
                                            value: result.company,
                                        },
                                        {
                                            icon: Shield,
                                            label: "Ruang Lingkup",
                                            value: result.scope,
                                        },
                                        {
                                            icon: Calendar,
                                            label: "Tanggal Terbit",
                                            value: result.issuedDate,
                                        },
                                        {
                                            icon: Calendar,
                                            label: "Berlaku Hingga",
                                            value: result.expiryDate,
                                        },
                                        {
                                            icon: Award,
                                            label: "Auditor",
                                            value: result.auditor,
                                        },
                                    ].map((row, i) => {
                                        const RowIcon = row.icon;

                                        return (
                                            <div
                                                key={i}
                                                className={`animate-fade-up-in-${
                                                    i * 200
                                                } flex items-start gap-3 rounded-xl border border-border bg-lightColor p-3`}
                                            >
                                                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-otherColor text-secondaryColor">
                                                    <RowIcon className="size-3.5" />
                                                </div>

                                                <div>
                                                    <p className="mb-0.5 text-xs text-mainColor/40">
                                                        {row.label}
                                                    </p>

                                                    <p className="text-sm font-medium text-mainColor">
                                                        {row.value}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <p className="pt-2 text-center text-xs text-mainColor/30">
                                    Data diverifikasi dari sistem Qualified
                                    Sertifikasi Indonesia ·{" "}
                                    {new Date().toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </div>
    );
};