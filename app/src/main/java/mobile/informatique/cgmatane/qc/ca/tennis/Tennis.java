package mobile.informatique.cgmatane.qc.ca.tennis;

import android.os.Bundle;
import android.widget.LinearLayout;
import org.apache.cordova.*;
import org.apache.cordova.DroidGap;


public class Tennis extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");

    }

}
