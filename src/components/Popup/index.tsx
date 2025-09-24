"use client";

import { useState } from "react";
import { usePopup } from "@/context/PopapContext";
import { X } from "lucide-react";

export default function Popup() {
	const { activePopap, setActivePopap } = usePopup(); // Используем ваш хук

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [status, setStatus] = useState("idle");

	const handleClose = () => {
		setActivePopap(false);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setStatus("loading");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, phone }),
			});

			if (response.ok) {
				setStatus("success");
				setName("");
				setPhone("");
				setTimeout(() => {
					handleClose();
					setStatus('idle');
				}, 2000);
			} else {
				setStatus("error");
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setStatus("error");
		}
	};

	const getButtonValue = () => {
		if (status === "loading") return "Отправка...";
		if (status === "success") return "Отправлено!";
		if (status === "error") return "Ошибка";
		return "Оставить заявку";
	};

	if (!activePopap) {
		return null;
	}

	return (
		<div
			onClick={handleClose}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				// ИЗМЕНЕНИЕ ЗДЕСЬ: Прямое указание цветов в radial-gradient
				className="relative w-full max-w-[990px] p-8 mx-4 rounded-[20px] bg-[radial-gradient(ellipse_at_bottom,_#3858B1,_#161719)] text-white pt-16 pb-12"
			>
				<button
					onClick={handleClose}
					className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
					aria-label="Закрыть"
				>
					<X size={20} />
				</button>

				<div className="flex flex-col gap-2 text-center">
					<h2 className="text-3xl font-semibold">Остались вопросы?</h2>
					<p className="text-white/60">
						Оставьте ваши контактные данные и мы на них ответим
					</p>
				</div>

				<form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
					<div className="flex flex-col lg:flex-row gap-4">
						<input
							className="w-full h-12 px-5 bg-white rounded-[24px] text-black text-[14px] placeholder:text-black/40"
							placeholder="Имя"
							type="text"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							disabled={status === 'loading'}
						/>
						<input
							className="w-full h-12 px-5 bg-white rounded-[24px] text-black text-[14px] placeholder:text-black/40"
							placeholder="+7"
							type="tel"
							required
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							disabled={status === 'loading'}
						/>
						<button
							type="submit"
							className="w-full h-12 rounded-[24px] font-medium text-white bg-gradient-to-r from-[#FF6217] to-[#F59465] transition-all hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-50"
							disabled={status === 'loading'}
						>
							{getButtonValue()}
						</button>
					</div>
				</form>
				{status === 'success' && <p className="text-center text-green-400 mt-2 text-sm">Спасибо! Мы скоро с вами свяжемся.</p>}
				{status === 'error' && <p className="text-center text-red-400 mt-2 text-sm">Произошла ошибка при отправке.</p>}

				<label className="flex items-center justify-center mt-4 gap-2 text-white/50">
					<input
						type="checkbox"
						required
						className="size-4 appearance-none bg-transparent border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-blue-500"
					/>
					<span className="text-xs max-w-[242px] lg:max-w-[372px]">

						Я даю согласие на обработку моих персональных данных согласно политике обработки персональных данных
					</span>
				</label>
			</div>
		</div>
	);
}