import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef } from 'react-icons/si';
import SectionHeading from '../components/ui/SectionHeading';

const codingProfiles = [
  { name: 'GitHub', icon: <FaGithub size={28} />, username: 'VivekChakali', link: 'https://github.com/VivekChakali', color: 'hover:border-white/40 hover:shadow-white/10' },
  { name: 'LeetCode', icon: <SiLeetcode size={28} />, username: 'vivekchakali', link: 'https://leetcode.com/u/Vivek_chakali88/', color: 'hover:border-[#FFA116]/40 hover:shadow-[#FFA116]/10' },
  { name: 'HackerRank', icon: <SiHackerrank size={28} />, username: 'vivekchakali', link: 'https://www.hackerrank.com/profile/24211A0588', color: 'hover:border-[#2EC866]/40 hover:shadow-[#2EC866]/10' },
  { name: 'CodeChef', icon: <SiCodechef size={28} />, username: 'vivekchakali', link: 'https://www.codechef.com/users/vivek_588', color: 'hover:border-[#5B4638]/40 hover:shadow-[#5B4638]/10' },
];

const Stats = () => {
  // Toggle this to true to show detailed GitHub and language stats again
  const ENABLE_GITHUB_STATS = false;

  return (
    <section id="stats" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accentPurple/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={ENABLE_GITHUB_STATS ? "GitHub & Coding Stats" : "Coding Profiles"}
          subtitle="A snapshot of my coding activity, contributions, and competitive programming journey."
        />

        {/* GitHub Stats Cards */}
        {ENABLE_GITHUB_STATS && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* GitHub Streak */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-accentPurple/30 transition-all duration-300 col-span-1 md:col-span-2"
            >
              <h4 className="text-textSecondary text-sm font-semibold uppercase tracking-wider mb-4">GitHub Contribution Stats</h4>
              <div className="flex flex-wrap gap-6">
                {[
                  { label: 'Total Commits', value: '500+', color: 'text-accentCyan' },
                  { label: 'Pull Requests', value: '50+', color: 'text-accentPurple' },
                  { label: 'Issues Raised', value: '30+', color: 'text-green-400' },
                  { label: 'Stars Earned', value: '80+', color: 'text-yellow-400' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-center">
                    <div className={`text-3xl font-bold ${color} mb-1`}>{value}</div>
                    <div className="text-textSecondary text-xs">{label}</div>
                  </div>
                ))}
              </div>
              {/* Contribution Graph Placeholder */}
              <div className="mt-5 rounded-xl overflow-hidden border border-white/10 bg-black/20 p-4">
                <p className="text-textSecondary text-xs mb-3 font-medium">Contribution Activity (placeholder)</p>
                <div className="flex gap-1 flex-wrap">
                  {Array.from({ length: 52 * 7 }).map((_, i) => {
                    const intensity = Math.random();
                    const color = intensity > 0.85 ? 'bg-accentPurple' : intensity > 0.65 ? 'bg-accentPurple/60' : intensity > 0.4 ? 'bg-accentPurple/30' : 'bg-white/5';
                    return <div key={i} className={`w-2 h-2 rounded-sm ${color}`} />;
                  })}
                </div>
              </div>
            </motion.div>

            {/* Top Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-accentCyan/30 transition-all duration-300"
            >
              <h4 className="text-textSecondary text-sm font-semibold uppercase tracking-wider mb-4">Top Languages</h4>
              <div className="space-y-4">
                {[
                  { lang: 'JavaScript', pct: 40, color: 'bg-yellow-400' },
                  { lang: 'Python', pct: 25, color: 'bg-blue-400' },
                  { lang: 'Java', pct: 20, color: 'bg-orange-400' },
                  { lang: 'C', pct: 15, color: 'bg-slate-400' },
                ].map(({ lang, pct, color }) => (
                  <div key={lang}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-textSecondary">{lang}</span>
                      <span className="text-white font-medium">{pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-2 rounded-full ${color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Coding Profile Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`glass rounded-2xl p-5 border border-white/10 ${profile.color} hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3 text-center`}
            >
              <div className="text-textSecondary group-hover:text-white transition-colors">{profile.icon}</div>
              <div>
                <p className="text-white font-semibold text-sm">{profile.name}</p>
                <p className="text-textSecondary text-xs">{profile.username}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-textSecondary font-medium">{profile.badge}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
