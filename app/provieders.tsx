"use client";

import {NextUIProvider} from "@nextui-org/react";

/* Core */

/* Instruments */

export function Providers({children}: { children: React.ReactNode }) {
	return (
			<NextUIProvider>
				{children}
			</NextUIProvider>
	);
}