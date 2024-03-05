export default function Table({ title, columns, rows }: Table) {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
			<h4 className="text-3xl font-semibold text-center m-2 mt-0">{title}</h4>
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						{columns.map((titles) => (
							<th key={titles} scope="col" className="px-6 py-3">
								{titles}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, key) => (
						<tr
							key={row[key]}
							className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
						>
							{row.map((content, key) =>
								key === 0 ? (
									<th
										key={content}
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										{content}
									</th>
								) : (
									<td key={content} className="px-6 py-4">
										{content}
									</td>
								),
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
