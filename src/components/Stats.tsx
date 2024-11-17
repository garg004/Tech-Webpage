export default function Stats() {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white">500+</div>
            <div className="mt-2 text-blue-100">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">50+</div>
            <div className="mt-2 text-blue-100">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">98%</div>
            <div className="mt-2 text-blue-100">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">12+</div>
            <div className="mt-2 text-blue-100">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}