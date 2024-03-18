import React, { useState } from "react";
import "./PaginationModules.css";
import { smoothScrollToTop } from "../../functions/SmoothScroll";

export default function Pagination({
	totalItems,
	itemsPerPage,
	onPageChange,
	currentPage,
	setCurrentPage,
}) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const handlePageChange = (page) => { // manejador cambio de pagina
		setCurrentPage(page);
		onPageChange(page);
		smoothScrollToTop();
	};

	const handlePrevPage = () => { // anterior
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
			onPageChange(currentPage - 1);
		}
	};

	const handleNextPage = () => { // proxima
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
			onPageChange(currentPage + 1);
		}
	};

	const renderPageNumbers = () => { // renderizado de paginas
		const pageNumbers = [];

		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					className={currentPage === i ? "active" : ""}
					onClick={() => handlePageChange(i)}
				>
					{i}
				</li>
			);
		}

		return pageNumbers;
	};

	return (
		<div className="pagination">
			<button
				onClick={handlePrevPage}
				disabled={currentPage === 1}
				className={currentPage === 1 ? "is_disabled" : "text"}
			>
				Anterior
			</button>
			<ul>{renderPageNumbers()}</ul>
			<button
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
				className={currentPage === totalPages ? "is_disabled" : "text"}
			>
				Próximo
			</button>
		</div>
	);
}