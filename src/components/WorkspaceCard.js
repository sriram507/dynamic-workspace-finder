export default function WorkspaceCard({ workspace, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <img 
        src={workspace.imageUrl} 
        alt={workspace.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{workspace.name}</h3>
        <p className="text-gray-600">{workspace.location}</p>
        <p className="text-blue-600 font-bold mt-2">
          ${workspace.pricePerHour}<span className="text-gray-500 text-sm">/hour</span>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {workspace.amenities?.map((item, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 text-sm rounded">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}