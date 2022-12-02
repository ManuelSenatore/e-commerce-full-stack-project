package com.CartoleriaPapyrus.ecommerce.services;

import com.CartoleriaPapyrus.ecommerce.utils.RequestModels.CheckoutRequest;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class OrderService {
    @Value("${BASE_URL}")
    private String baseURL;

    @Value("${STRIPE_SECRET_KEY}")
    private String apiKey;
    public Session createSession(List<CheckoutRequest> checkoutRequestList) throws StripeException {
        String successURL = baseURL + "payment/success";

        String failureURL = baseURL + "payment/failure";

        Stripe.apiKey = apiKey;

        List<SessionCreateParams.LineItem> sessionItemList = new ArrayList<>();

        for(CheckoutRequest checkoutRequest : checkoutRequestList) {
            sessionItemList.add(createSessionLineItem(checkoutRequest));
        }

        SessionCreateParams params = SessionCreateParams.builder()
                .addAllPaymentMethodType(Collections.singletonList(SessionCreateParams.PaymentMethodType.CARD))
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setCancelUrl(failureURL)
                .setSuccessUrl(successURL)
                .addAllLineItem(sessionItemList)
                .build();
        return Session.create(params);
    }

    private SessionCreateParams.LineItem createSessionLineItem(CheckoutRequest checkoutRequest) {

        return SessionCreateParams.LineItem.builder()
                .setPriceData(createPriceData(checkoutRequest))
                .setQuantity((long) checkoutRequest.getQuantity())
                .build();
    }

    private SessionCreateParams.LineItem.PriceData createPriceData(CheckoutRequest checkoutRequest) {
        return SessionCreateParams.LineItem.PriceData.builder()
                .setCurrency("euro")
                .setUnitAmount((long)checkoutRequest.getPrice()*100)
                .setProductData(
                        SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                .setName(checkoutRequest.getProductName())
                                .build()
                ).build();
    }
}
