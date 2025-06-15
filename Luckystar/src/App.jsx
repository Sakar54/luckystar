export default function App() {
	return (
		<div className="min-h-screen p-10 space-y-8 bg-gradient-to-br from-pink-100 via-white to-blue-100">
			<h1 className="text-5xl font-extrabold text-center text-purple-600">
				🎨 Tailwind Color Test
			</h1>

			{/* Text Colors */}
			<div className="space-y-2">
				<p className="text-red-500">This is red-500</p>
				<p className="text-green-500">This is green-500</p>
				<p className="text-blue-500">This is blue-500</p>
				<p className="text-yellow-500">This is yellow-500</p>
				<p className="text-purple-500">This is purple-500</p>
			</div>

			{/* Background Colors */}
			<div className="flex gap-4">
				<div className="bg-red-500 text-white px-4 py-2 rounded">Red</div>
				<div className="bg-green-500 text-white px-4 py-2 rounded">Green</div>
				<div className="bg-blue-500 text-white px-4 py-2 rounded">Blue</div>
				<div className="bg-yellow-400 text-white px-4 py-2 rounded">Yellow</div>
				<div className="bg-purple-500 text-white px-4 py-2 rounded">Purple</div>
			</div>

			{/* Borders */}
			<div className="flex gap-4">
				<div className="border-4 border-red-500 px-4 py-2">Red Border</div>
				<div className="border-4 border-blue-500 px-4 py-2">Blue Border</div>
				<div className="border-4 border-green-500 px-4 py-2">Green Border</div>
			</div>

			{/* Hover Effect */}
			<button className="bg-indigo-500 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
				Hover Me (Indigo)
			</button>

			{/* Gradient Example */}
			<div className="p-6 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-bold text-center">
				🌈 Gradient Background Works Too!
			</div>
		</div>
	);
}
