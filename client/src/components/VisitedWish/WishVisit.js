import { useQuery } from "@apollo/client"
// import { useState, useEffect } from "react"
import { QUERY_ME } from "../../utils/queries"
import WishListButton from "./WishListButton";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client"
import { ADD_WISHLIST } from "../../utils/mutations"
import { REMOVE_WISHLIST } from "../../utils/mutations"
import { ADD_VISITLIST } from "../../utils/mutations";
import { REMOVE_VISITLIST } from "../../utils/mutations";
import VisitedButton from "./VisitedButton";

export default function WishVisit({ parkCode }) {
    const { data, refetch } = useQuery(QUERY_ME);
    const [wished, setWished] = useState(false)
    const [addWishlist] = useMutation(ADD_WISHLIST)
    const [removeWishList] = useMutation(REMOVE_WISHLIST)
    const [visited, setVisited] = useState(false)
    const [addVisitList] = useMutation(ADD_VISITLIST)
    const [removeVisitList] = useMutation(REMOVE_VISITLIST)

    useEffect(() => {
        if (data) {
            setWished(data?.me?.wishList?.filter(park => park === parkCode).length > 0)
            setVisited(data?.me?.parksVisited?.filter(park => park === parkCode).length > 0)
        }
    }, [data, parkCode]);

    if (!data) return null

    async function handleWish() {
        if (wished) {
            await removeWishList({ variables: { parkCode: parkCode } });
        } else {
            await addWishlist({ variables: { parkCode: parkCode } });
        }
        // Refetch data from server
        await refetch();
    }

    async function handleVisited() {
        if (visited) {
            await removeVisitList({ variables: { parkCode: parkCode } });
        } else {
            await addVisitList({ variables: { parkCode: parkCode } });
        }
        // Refetch data from server
        await refetch();
    }

    return (
        <div className="flex gap-5">
            <WishListButton wished={wished} handleWish={handleWish} />
            <VisitedButton visited={visited} handleVisited={handleVisited} />
        </div>
    )
}