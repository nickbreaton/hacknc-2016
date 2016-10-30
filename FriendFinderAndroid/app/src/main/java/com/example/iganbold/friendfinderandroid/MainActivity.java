package com.example.iganbold.friendfinderandroid;


import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.location.LocationListener;
import android.location.LocationManager;
import android.location.Location;
import android.os.Handler;

import com.wikitude.architect.ArchitectView;
import com.wikitude.architect.StartupConfiguration;

import java.io.IOException;

public class MainActivity extends AppCompatActivity {

    private ArchitectView architectView;
    private GPSTracker gps = new GPSTracker(this);
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.architectView = (ArchitectView)this.findViewById( R.id.architectView );
        final StartupConfiguration config = new StartupConfiguration("VmPRllk2DX86Y0mW16JmwoQSeKoNvEyYn+Zo4/DPbP7ZV38UTeqmR+rwDQCp49bMs1gao+fPA2I07y8Cg99qoDqVMP7Ez6f3HDTcrcKht3vtZl0FBLxwzC8+uWnzPwY5sNsDy0zdDD4zERxKm0Qcq0/iLxbJW/a0eLo1p2szDIpTYWx0ZWRfX6sq6gAR9ZgNnoBssBmnlIhuku4RW5EKuI7QDJn3oe7MPGRBwGw5drz0rzyCzd54XfZhx4Gk+A4Cg7EU3DiACnPEHKREr4Gy8DHndnNW436gqBEWlSM+NBQO4bcrzVkfydHIoRHE4KK1BMB2i1KS0OrS8aMLl7vDzM0OrplEYQ+FPQtD/VhLu8dpIv/Vp8G9tjLsw3tlJL/RRCSoyImqYzLqxPX3+F9BFXUUOCUEMDUXHHa+rRFPnFsMgGDv1StLz/W9zDtGPf72JlzCLd8HXcFQqZ98Lc1xMFufhvp7EEXbCpIu91NJDLjdt5NAMCxJcdgr3O8SKXsZpCbXimIvezmsWAK+eYxoEGmPm6wNA6NnDt3gh+T+FQFyi1UVoezc9VGXiVdRjD2GSNquV5m82a+UmDdg19sOC/vFkOxlytk48oxyjiVgB7AS7p6Dq8KoMf94ZSsxhG3cjlaozfmu+shXXO0bNErOzNpf4qLz3hd35BVax0P+ris=");
        this.architectView.onCreate( config );
    }

    @Override
    public void onPostCreate(@Nullable Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);

        architectView.onPostCreate();

        try{
            this.architectView.load( "file:///android_asset/finder/index.html" );
//            this.architectView.load( "http://172.27.223.145:9090/index.html" );
        }catch (IOException ex) {

        }
    }

    @Override
    protected void onPostResume() {
        super.onPostResume();


        architectView.setLocation(gps.getLatitude(), gps.getLongitude(),0.0,90);
    }

    @Override
    protected void onResume() {
        super.onResume();
        architectView.onResume();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        gps.stopUsingGPS();
        architectView.onDestroy();
    }

    @Override
    protected void onPause() {
        super.onPause();
        architectView.onPause();
    }

}
