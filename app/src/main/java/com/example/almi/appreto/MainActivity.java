package com.example.almi.appreto;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;

import fragmentos.FragConsolas;
import fragmentos.FragGaleria;
import fragmentos.FragInformacion;
import fragmentos.FragInicio;
import fragmentos.FragJuegos;
import fragmentos.FragLogin;
import fragmentos.FragMoviles;
import fragmentos.FragServices;
import fragmentos.FragUbicacion;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.addDrawerListener(toggle);
        toggle.syncState();

        getSupportFragmentManager().beginTransaction().add(R.id.container_principal, new FragInicio()).commit();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_juegos) {
            getSupportFragmentManager().beginTransaction().setCustomAnimations(R.anim.entrada, R.anim.salida).replace(R.id.container_principal, new FragJuegos()).addToBackStack(null).commit();
        } else if (id == R.id.nav_consolas) {
            getSupportFragmentManager().beginTransaction().setCustomAnimations(R.anim.entrada, R.anim.salida).replace(R.id.container_principal, new FragConsolas()).addToBackStack(null).commit();
        } else if (id == R.id.nav_moviles) {
            getSupportFragmentManager().beginTransaction().setCustomAnimations(R.anim.entrada, R.anim.salida).replace(R.id.container_principal, new FragMoviles()).addToBackStack(null).commit();
        } else if (id == R.id.nav_servicios) {
            getSupportFragmentManager().beginTransaction().setCustomAnimations(R.anim.entrada, R.anim.salida).replace(R.id.container_principal, new FragServices()).addToBackStack(null).commit();
        } else if (id == R.id.nav_galeria) {
            getSupportFragmentManager().beginTransaction().setCustomAnimations(R.anim.entrada, R.anim.salida).replace(R.id.container_principal, new FragGaleria()).addToBackStack(null).commit();
        } else if (id == R.id.nav_ubicacion) {
            getSupportFragmentManager().beginTransaction().setCustomAnimations(R.anim.entrada, R.anim.salida).replace(R.id.container_principal, new FragUbicacion()).addToBackStack(null).commit();
        } else if (id == R.id.nav_informacion) {
            getSupportFragmentManager().beginTransaction().setCustomAnimations(R.anim.entrada, R.anim.salida).replace(R.id.container_principal, new FragInformacion()).addToBackStack(null).commit();
        } else if (id == R.id.nav_login) {
            getSupportFragmentManager().beginTransaction().setCustomAnimations(R.anim.entrada, R.anim.salida).replace(R.id.container_principal, new FragLogin()).addToBackStack(null).commit();
        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }
}
