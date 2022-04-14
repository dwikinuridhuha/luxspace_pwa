function Offline() {
  return (
    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-400">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          />
        </div>
        <div className="ml-3">
          <p className="font-medium text-yellow-700">
            You are offline. Don't you worry, you still can do things.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offline;
