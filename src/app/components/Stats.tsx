export default function Stats () {
    return(
        <>
         {/* Stats section */}
      <section className="w-full py-12 bg-blue-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">30+</div>
              <p className="text-blue-200">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">5000+</div>
              <p className="text-blue-200">Happy Students</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">100+</div>
              <p className="text-blue-200">Qualified Teachers</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400">98%</div>
              <p className="text-blue-200">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}