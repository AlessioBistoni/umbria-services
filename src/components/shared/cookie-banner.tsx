"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "umbria-services-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage, unavailable during SSR
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card/95 p-5 shadow-2xl backdrop-blur sm:p-6"
        >
          <div className="container-site flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-start gap-3 sm:items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Cookie className="h-4.5 w-4.5" />
              </span>
              <p className="text-sm text-muted-foreground">
                Utilizziamo cookie tecnici per garantire il corretto
                funzionamento del sito. Continuando la navigazione accetti la
                nostra{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  Privacy &amp; Cookie Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button variant="outline" size="sm" className="rounded-full" onClick={decline}>
                Rifiuta
              </Button>
              <Button size="sm" className="rounded-full" onClick={accept}>
                Accetta
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
