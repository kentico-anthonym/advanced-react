export default function Search() {
  return (
    <form action="" role="search">
      <div>
        <label htmlFor="site-search">
          Search the site:
          <input
            type="search"
            id="site-search"
            name="q"
            aria-label="Search through site content"
            required
          />
        </label>
        <button type="button">Search</button>
      </div>
    </form>
  );
}
