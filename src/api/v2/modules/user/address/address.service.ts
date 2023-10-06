import { prisma } from "../../../../v1/server";
import { TaddressPayload } from "./address.types";

export async function addUserAddress(
    userId: string,
    payload: TaddressPayload
) {
    try {
        const address = await prisma.user
            .update({
                where: { id: userId },
                data: {
                    addresses: {
                        create: [
                            {
                                address: {
                                    create: {
                                        unit_number: payload.unitNumber,
                                        street_address: payload.streetAddress,
                                        city: payload.city,
                                        region: payload.region,
                                        postal_code: payload.postalCode,
                                        countryId: payload.countryId
                                    }
                                }
                            }
                        ]
                    }
                }
            })
        return address
    } catch (e) {

    }
}


export async function updateUserAddress(
    userId: string,
    addressId: string,
    payload: TaddressPayload
) {
    try {
        const updates: Partial<TaddressPayload> = {}

        if (payload.city) {
            updates.city = payload.city
        }
        if (payload.countryId) {
            updates.countryId = payload.countryId
        }
        if (payload.postalCode) {
            updates.postalCode = payload.postalCode
        }
        if (payload.region) {
            updates.region = payload.region
        }
        if (payload.streetAddress) {
            updates.streetAddress = payload.streetAddress
        }
        if (payload.unitNumber) {
            updates.unitNumber = payload.unitNumber
        }
        const address = await prisma
            .user_address_history.update({
                where: {
                    addressId_userId: {
                        addressId,
                        userId
                    }
                },
                data:
            })
        return address
    } catch (e) {

    }
}

export async function getUserAddressHistory(userId: string) {
    try {
        const address = await prisma.user_address_history.findMany({
            where: {
                userId
            }
        })
        return address
    } catch (e) {

    }
}

export async function deleteUserAddress(addressId: string, userId: string) {
    try {
        const address = await prisma.user_address_history.delete({
            where: {
                addressId_userId: {
                    userId,
                    addressId
                }
            }
        })
        return address
    } catch (e) {

    }
}