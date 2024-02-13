import { SearchInput } from "@/components/search-input";
import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
    return (
        <div className="h-full p-4 space-y-2">
            <SearchInput />
            Root Page
        </div>
    );
}

export default RootPage;