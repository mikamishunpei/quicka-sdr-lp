"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

interface TeamMemberCardProps {
  position: "left" | "right"
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  description?: string
  className?: string
}

export default function TeamMemberCard({
  position = "left",
  jobPosition = "専属トップカウンセラー",
  firstName = "AI",
  lastName = "Concierge",
  imageUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=800", // 上品な接客をイメージしたフリー素材
  description = "24時間365日、一切の疲労も感情のブレもなく、すべての患者様に完璧なホスピタリティで寄り添う御院専用のトップカウンセラーです。",
  className,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === "right"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative my-16 flex flex-col justify-center", className)}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            "mb-4 text-xs font-bold tracking-[0.3em] text-brand-gold uppercase",
            isPositionRight && "text-right"
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className="flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative h-125 w-90 shrink-0 overflow-hidden rounded-2xl shadow-xl",
            isPositionRight && "order-1"
          )}
          style={{ height: "400px", width: "300px" }}
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <img
            src={imageUrl}
            alt={fullName}
            className="h-full w-full object-cover duration-500 ease-[0.22,1,0.36,1] hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative -left-8 z-20 flex w-[calc(100%-250px)] max-w-lg flex-col gap-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100",
            isPositionRight && "left-8 items-end"
          )}
        >
          <div>
            <p className="text-5xl leading-[1.1] font-black tracking-tight text-gray-900">
              {firstName}
              <br />
              <span className="font-light text-brand-gold">{lastName}</span>
            </p>
          </div>

          <div className={cn("flex flex-col gap-6", isPositionRight && "items-end")}>
            <div className="w-full">
              <p
                className={cn(
                  "text-base leading-[1.8] text-gray-700 font-medium",
                  isPositionRight && "text-right"
                )}
              >
                {description}
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "group flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-900 transition-colors duration-300 hover:bg-brand-gold",
                isPositionRight && "order-1"
              )}
            >
              <ArrowRight
                size={22}
                className={cn(
                  "text-white transition-all duration-300 group-hover:-rotate-45",
                  isPositionRight && "rotate-180 group-hover:rotate-225"
                )}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
