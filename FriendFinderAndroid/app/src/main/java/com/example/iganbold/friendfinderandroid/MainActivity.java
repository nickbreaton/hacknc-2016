package com.example.iganbold.friendfinderandroid;


import android.Manifest;
import android.content.pm.PackageManager;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
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
    private LocationListener locationListener;
    private LocationManager locationManager;

    private ArchitectView architectView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        locationManager = (LocationManager) getSystemService(LOCATION_SERVICE);
        locationListener = new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                architectView.setLocation(location.getLatitude(), location.getLongitude(), 0.0, 90);
            }

            @Override
            public void onStatusChanged(String s, int i, Bundle bundle) {

            }

            @Override
            public void onProviderEnabled(String s) {

            }

            @Override
            public void onProviderDisabled(String s) {

            }
        };
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            return;
        }

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.architectView = (ArchitectView)this.findViewById( R.id.architectView );
        final StartupConfiguration config = new StartupConfiguration("VmPRllk2DX86Y0mW16JmwoQSeKoNvEyYn+Zo4/DPbP7ZV38UTeqmR+rwDQCp49bMs1gao+fPA2I07y8Cg99qoDqVMP7Ez6f3HDTcrcKht3vtZl0FBLxwzC8+uWnzPwY5sNsDy0zdDD4zERxKm0Qcq0/iLxbJW/a0eLo1p2szDIpTYWx0ZWRfX6sq6gAR9ZgNnoBssBmnlIhuku4RW5EKuI7QDJn3oe7MPGRBwGw5drz0rzyCzd54XfZhx4Gk+A4Cg7EU3DiACnPEHKREr4Gy8DHndnNW436gqBEWlSM+NBQO4bcrzVkfydHIoRHE4KK1BMB2i1KS0OrS8aMLl7vDzM0OrplEYQ+FPQtD/VhLu8dpIv/Vp8G9tjLsw3tlJL/RRCSoyImqYzLqxPX3+F9BFXUUOCUEMDUXHHa+rRFPnFsMgGDv1StLz/W9zDtGPf72JlzCLd8HXcFQqZ98Lc1xMFufhvp7EEXbCpIu91NJDLjdt5NAMCxJcdgr3O8SKXsZpCbXimIvezmsWAK+eYxoEGmPm6wNA6NnDt3gh+T+FQFyi1UVoezc9VGXiVdRjD2GSNquV5m82a+UmDdg19sOC/vFkOxlytk48oxyjiVgB7AS7p6Dq8KoMf94ZSsxhG3cjlaozfmu+shXXO0bNErOzNpf4qLz3hd35BVax0P+ris=");
        this.architectView.onCreate( config );

        locationManager.requestLocationUpdates("gps", 3000, 0, locationListener);

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

    }

    @Override
    protected void onResume() {
        super.onResume();
        architectView.onResume();
        locationManager.requestLocationUpdates("gps", 3000, 0, locationListener);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        architectView.onDestroy();
    }

    @Override
    protected void onPause() {
        super.onPause();
        architectView.onPause();
    }

}
