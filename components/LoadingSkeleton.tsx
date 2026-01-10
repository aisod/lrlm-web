export default function LoadingSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <LoadingSkeleton className="h-4 w-80 mx-auto mb-8" />
          <LoadingSkeleton className="h-16 w-96 mx-auto mb-6" />
          <LoadingSkeleton className="h-12 w-80 mx-auto mb-6" />
          <LoadingSkeleton className="h-6 w-3xl mx-auto mb-8" />
          <div className="flex justify-center space-x-4 mb-12">
            <LoadingSkeleton className="h-12 w-48" />
            <LoadingSkeleton className="h-12 w-40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <LoadingSkeleton className="h-24 w-full" />
            <LoadingSkeleton className="h-24 w-full" />
            <LoadingSkeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureSkeleton() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <LoadingSkeleton className="h-12 w-96 mx-auto mb-4" />
          <LoadingSkeleton className="h-6 w-2xl mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <LoadingSkeleton className="h-12 w-12 mb-4" />
              <LoadingSkeleton className="h-6 w-48 mb-4" />
              <LoadingSkeleton className="h-4 w-full mb-2" />
              <LoadingSkeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}