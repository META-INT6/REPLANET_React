import { Link } from "react-router-dom";

export function ReviewListSearchbar () {

    return (
        <div className="text-center">
            <input type="text" className="searchbar" placeholder="🔎 Search" />
            <select>
                <option value=''>미등록 후기</option>
                <option value=''>등록 후기</option>
            </select>
        </div>
    );
}