class Category {
	constructor(
		id,
		categoryIds,
		title,
		affordability,
		complexity,
		imageUrl,
		duration,
		ingredients,
		steps,
		isGluteinFree,
		isLactoseFree,
		isVegan,
		IsCarnivore,
		isKeto
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affordability = affordability;
		this.complexity = complexity;
		this.imageUrl = imageUrl;
		this.duration = duration;
		this.ingredients = ingredients;
		this.steps = steps;
		this.isGluteinFree = isGluteinFree;
		this.isLactoseFree = isLactoseFree;
		this.isVegan = isVegan;
		this.IsCarnivore = IsCarnivore;
		this.isKeto = isKeto;
	}
}
export default Category;
