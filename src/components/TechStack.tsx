"use client"

import { Database, Server, Layout, Code2, Cpu, Globe } from "lucide-react"

export default function TechStack() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300 py-16 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 mt-10 space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-white">
            Our Tech Stack
          </h2>
          <p className="text-lg text-base-content/80">
            Powered by Modern Technologies
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Frontend Card */}
          <div className="card bg-gradient-to-br from-blue-500/30 to-purple-500/30 hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-xl group">
            <div className="card-body items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/5 mask-image-gradient"/>
              <Layout className="w-12 h-12 mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="card-title text-2xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Frontend
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Code2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="text-lg font-medium text-white">React</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Globe className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="text-lg font-medium text-white">TypeScript</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <Code2 className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="text-lg font-medium text-white">Redux</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Code2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="text-lg font-medium text-white">Zod</span>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="card bg-gradient-to-br from-green-500/30 to-emerald-500/30 hover:from-green-500/40 hover:to-emerald-500/40 transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-xl group">
            <div className="card-body items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/5 mask-image-gradient"/>
              <Server className="w-12 h-12 mb-4 text-green-500 group-hover:scale-110 transition-transform duration-300"/>
              <h3 className="card-title text-2xl mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Backend
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <Cpu className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-lg font-medium text-white">Node.js</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Server className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="text-lg font-medium text-white">Express.js</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <Code2 className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-lg font-medium text-white">TypeScript</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Globe className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="text-lg font-medium text-white">Nodemailer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Database Card */}
          <div className="card bg-gradient-to-br from-orange-500/30 to-red-500/30 hover:from-orange-500/40 hover:to-red-500/40 transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-xl group">
            <div className="card-body items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/5 mask-image-gradient"/>
              <Database className="w-12 h-12 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300"/>
              <h3 className="card-title text-2xl mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Database
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <Database className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-lg font-medium text-white">Prisma</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-red-500/10">
                    <Database className="w-6 h-6 text-red-500" />
                  </div>
                  <span className="text-lg font-medium text-white">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for the grid background */}
      <style jsx>{`
        .bg-grid-white\/5 {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        .mask-image-gradient {
          mask-image: linear-gradient(to bottom, white 50%, transparent 100%);
        }
      `}</style>
    </div>
  )
}