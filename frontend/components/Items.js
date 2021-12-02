export default function Items({ text, Icon, href }) {
  return (
    <a
      href={href}
      className="list-none p-4 hover:bg-gray-400 w-full rounded-lg shadow-sm flex items-center space-x-4 cursor-pointer"
    >
      <Icon className="text-gray-600 h-6" />
      <h1>{text}</h1>
    </a>
  );
}
