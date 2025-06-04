const TestimonialCard = ({ image, name, role, text }) => {
  return (
    <div className="bg-white rounded-2xl p-8 mx-4 shadow-lg h-full flex flex-col justify-between">
      <p className="text-gray-700 text-lg italic mb-6">“{text}”</p>
      <div className="flex items-center mt-auto">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-purple-600 mr-4"
        />
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
