import React from "react";
import { Product } from "./Product";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("<Product /> tests", () => {
	const wrapper = () => {
		return render(
			<Product />
		);
	}
	it("should build component without products", async () => {
		const { getByTestId } = wrapper();
		expect(getByTestId("product-title")).toBeDefined();
	});
});
